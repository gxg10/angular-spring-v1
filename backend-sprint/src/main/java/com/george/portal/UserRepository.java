package com.george.portal;

import org.aspectj.apache.bcel.util.Repository;

import java.util.List;

public interface UserRepository extends Repository {

    void delete(User user);

    List findAll();

    User findOne(int id);

    User save(User user);
}
