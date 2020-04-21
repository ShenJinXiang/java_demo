package com.shenjinxiang.spb.config;

import com.shenjinxiang.spb.domain.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

/**
 * @Author: ShenJinXiang
 * @Date: 2020/4/21 10:29
 */
@Configuration
public class EntityConfig {


    @Bean
    public User createUser() {
        User user = new User();
        user.setName("张三");
        user.setAge(19);
        user.setBirthday(new Date());
        user.setPassword("123123123");
        user.setAddress("北京");
        return user;
    }
}
