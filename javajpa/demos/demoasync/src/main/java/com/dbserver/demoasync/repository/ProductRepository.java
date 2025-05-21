package com.dbserver.demoasync.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.dbserver.demoasync.entity.Product;

@Repository
public interface ProductRepository extends ListCrudRepository<Product, Integer>{
}
