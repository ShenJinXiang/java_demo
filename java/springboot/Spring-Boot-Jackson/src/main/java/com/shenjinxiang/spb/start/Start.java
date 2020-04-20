package com.shenjinxiang.spb.start;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @Author: ShenJinXiang
 * @Date: 2020/4/20 22:31
 */
@Component
public class Start implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        System.out.println(args);
        System.out.println("hhhhhhhhhhhh");
    }
}
