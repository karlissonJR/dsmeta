package com.karlisson.dsmeta.repositories;

import com.karlisson.dsmeta.entities.Sale;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query("SELECT obj FROM Sale obj WHERE obj.date >= :min AND obj.date <= :max ORDER BY obj.amount DESC")
    Page<Sale> findSales(LocalDate min, LocalDate max, Pageable pageable);

}
