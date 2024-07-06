package com.weather.views.login;

import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.component.login.LoginI18n;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.*;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.weather.views.signup.SignUp;

import java.util.logging.Logger;

import static com.weather.common.config.ApplicationRoutes.LOGIN_ROUTE;


@Route(LOGIN_ROUTE)
@PageTitle("Login")
@AnonymousAllowed
public class LoginView extends VerticalLayout implements BeforeEnterObserver {
    private static final Logger LOGGER = Logger.getLogger(LoginView.class.getName());
    private final LoginForm login = new LoginForm();

    public LoginView() {
        LOGGER.info("Initiate Login View");
        this.login.getElement().getThemeList().add("dark");
        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);
        this.login.setAction(LOGIN_ROUTE);
        this.login.setI18n(this.createLoginI18n());
        this.login.setForgotPasswordButtonVisible(false);
        add(this.login, new RouterLink("Sign Up", SignUp.class));

    }


    private LoginI18n createLoginI18n() {
        final LoginI18n loginI18n = LoginI18n.createDefault();
        loginI18n.getForm().setUsername("User Name");
        loginI18n.getForm().setSubmit("Sign in");
        loginI18n.getForm().setTitle("Weather App");
        loginI18n.getForm().setPassword("Password");
        return loginI18n;
    }

    @Override
    public void beforeEnter(BeforeEnterEvent beforeEnterEvent) {
        if (beforeEnterEvent.getLocation()
                .getQueryParameters()
                .getParameters()
                .containsKey("error")) {
            this.login.setError(true);
        }
    }
}
