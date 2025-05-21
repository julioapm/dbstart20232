package com.dbserver.demoasync.service;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.dbserver.demoasync.entity.Product;
import com.dbserver.demoasync.repository.ProductRepository;

import java.util.concurrent.CompletableFuture;
import java.util.List;

@Service
public class ProductService {
    private ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    @Async
    public CompletableFuture<List<Product>> getAllProducts() {
        final List<Product> products = this.repository.findAll();
        return CompletableFuture.completedFuture(products);
    }

    @Async
    public void saveProduct(Product p) throws InterruptedException {
        //Simular o tempo de acesso ao BD
        Thread.sleep(5000);
    }
}
