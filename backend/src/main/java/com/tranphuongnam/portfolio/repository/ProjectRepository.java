package com.tranphuongnam.portfolio.repository;

import com.tranphuongnam.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
