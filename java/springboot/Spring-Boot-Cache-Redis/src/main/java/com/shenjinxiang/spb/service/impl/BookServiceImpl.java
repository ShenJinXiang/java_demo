package com.shenjinxiang.spb.service.impl;

import com.shenjinxiang.spb.domain.Book;
import com.shenjinxiang.spb.mapper.BookMapper;
import com.shenjinxiang.spb.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: ShenJinXiang
 * @Date: 2020/4/16 17:30
 */
@Service("bookService")
public class BookServiceImpl implements BookService {

    @Autowired
    private BookMapper bookMapper;

    @Override
    public List<Book> queryAll() {
        return bookMapper.queryAll();
    }

    @Override
    public Book queryById(int id) {
        return bookMapper.queryById(id);
    }

    @Override
    public int add(Book book) {
        return bookMapper.add(book);
    }

    @Override
    public int upd(Book book) {
        return bookMapper.upd(book);
    }

    @Override
    public int delById(int id) {
        return bookMapper.delById(id);
    }
}