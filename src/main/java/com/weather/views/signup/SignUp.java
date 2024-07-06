package com.weather.views.signup;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.weather.entity.User;
import com.weather.service.UserService;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.logging.Logger;

import static com.weather.common.config.ApplicationRoutes.SIGNUP_ROUTE;

@AnonymousAllowed
@Route(SIGNUP_ROUTE)
public class SignUp extends Composite {

    private static final Logger LOGGER = Logger.getLogger(SignUp.class.getName());

    @Autowired
    public UserService userService;

    @Override
    protected Component initContent() {
        var username = new TextField("User Name");
        var password = new PasswordField("Password");

        var signUpGrid = this.designSignUpLayout(username, password);
        signUpGrid.setAlignItems(FlexComponent.Alignment.CENTER);
        signUpGrid.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        signUpGrid.getElement().getThemeList().add("dark");
        return signUpGrid;
    }

    private VerticalLayout designSignUpLayout(TextField username, PasswordField password) {
        var registerButton = new Button("Sign Up", click -> {
            this.registerUser(username.getValue(), password.getValue());
        });

        var registerForm = new VerticalLayout(new H2("Sign Up"), username, password, new HorizontalLayout(registerButton));
        registerForm.setSizeFull();
        return registerForm;
    }

    private void registerUser(String username, String password) {
        if (username.trim().isEmpty()) {
            Notification.show("Enter a username");
        } else if (password.isEmpty()) {
            Notification.show("Enter a password");
        } else {
            User user = this.userService.getUser(username);
            if (user != null) {
                Notification.show("User already exists");
                LOGGER.info("User already exists");
            } else {
                this.userService.register(username, password);
                Notification.show("User Registered successfully");
                LOGGER.info("Registered successfully");
                UI.getCurrent().navigate("login");
            }
        }
    }
}
