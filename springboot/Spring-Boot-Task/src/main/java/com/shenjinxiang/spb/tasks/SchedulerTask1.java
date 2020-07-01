package com.shenjinxiang.spb.tasks;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * @Author: ShenJinXiang
 * @Date: 2020/6/22 9:04
 */
@Component
public class SchedulerTask1 {

    private static final Logger logger = LoggerFactory.getLogger(SchedulerTask1.class);

    @Scheduled(cron = "*/3 * * * * *")
    public void task1() {
        logger.info("SchedulerTask1 task1 running");
    }


//    @Scheduled(cron = "*/5 * * * * *")
//    public void task2() {
//        logger.info("SchedulerTask task2 running");
//    }

}
