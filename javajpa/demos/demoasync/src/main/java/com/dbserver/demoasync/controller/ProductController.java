package com.dbserver.demoasync.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;

import com.dbserver.demoasync.entity.Product;
import com.dbserver.demoasync.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("products")
public class ProductController {
    private ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @Async
    @GetMapping()
    public CompletableFuture<ResponseEntity<List<Product>>> getAllProducts() {
        return service.getAllProducts()
            .thenApply(ResponseEntity::ok)
            .exceptionally(t -> {
                return ResponseEntity.internalServerError().build();
            });
    }

    @Async
    @PostMapping()
    public void postSaveProduct() {
        
    }
    
}
