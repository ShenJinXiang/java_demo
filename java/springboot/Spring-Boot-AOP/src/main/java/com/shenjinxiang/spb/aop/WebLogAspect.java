package com.shenjinxiang.spb.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

/**
 * @Author: ShenJinXiang
 * @Date: 2020/4/6 20:29
 */
@Component
@Aspect
public class WebLogAspect {

    private static final Logger log = LoggerFactory.getLogger(WebLogAspect.class);

    @Pointcut("execution(public * com.shenjinxiang.spb.controller..*(..))")
    public void controllerLog() {}

    @Before("controllerLog()")
    public void logBeforeController(JoinPoint joinPoint) {
        log.info("logBeforeController before...");
    }

    @Around("controllerLog()")
    public Object aroundController(ProceedingJoinPoint point) {
        log.info("aroundController before....");
        Object result = null;
        try {
            result = point.proceed();
        } catch (Throwable e) {
        }
        String className = point.getTarget().getClass().getName();
        log.info(className);
        MethodSignature signature = (MethodSignature) point.getSignature();
        Method method = signature.getMethod();
        log.info(method.getName());
        log.info(signature.getName());
        log.info("aroundController after....");
        return result;
    }
}
