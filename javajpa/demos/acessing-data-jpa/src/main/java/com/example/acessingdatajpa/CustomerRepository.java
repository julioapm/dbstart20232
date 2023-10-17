package com.example.acessingdatajpa;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer,Long> {
    Customer findById(long id);
    List<Customer> findByLastName(String lastName);
}
