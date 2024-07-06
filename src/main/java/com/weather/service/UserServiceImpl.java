package com.weather.service;
import com.weather.entity.User;
import com.weather.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service("UserServiceImpl")
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    private final HttpServletRequest request;

    public UserServiceImpl(UserRepository userRepository, HttpServletRequest request) {
        this.userRepository = userRepository;
        this.request = request;
    }

    public User getUser(String userName){
        return this.userRepository.findByUserNameIgnoreCase(userName);
    }

    public void register(String userName, String password) {
        User user = new User();
        user.setUserName(userName);
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        userRepository.save(user);
    }


    @Override
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {

        com.weather.entity.User userDetail = userRepository.findByUserNameIgnoreCase(username);
        request.getSession().setAttribute("User", userDetail);
        return org.springframework.security.core.userdetails.User.builder()
                .username(userDetail.getUserName())
                .password(userDetail.getPassword())
                .roles("USER")
                .build();
    }

}
