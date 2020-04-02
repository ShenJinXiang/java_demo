package com.shenjinxiang.spb;

import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;

/**
 * @Author: ShenJinXiang
 * @Date: 2020/4/2 16:21
 */
public class Application {

    public static void main(String[] args) {
        SpringApplication application = new SpringApplication(Application.class);
        application.setBannerMode(Banner.Mode.OFF);
        application.run(args);
    }
}
