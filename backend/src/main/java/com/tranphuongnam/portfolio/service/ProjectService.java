package com.tranphuongnam.portfolio.service;

import com.tranphuongnam.portfolio.entity.Project;
import com.tranphuongnam.portfolio.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> findAll() {
        return projectRepository.findAll();
    }

    public Project findById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found: " + id));
    }

    public Project create(Project project) {
        project.setId(null);
        return projectRepository.save(project);
    }

    public Project update(Long id, Project projectDetails) {
        Project project = findById(id);
        project.setName(projectDetails.getName());
        project.setDescription(projectDetails.getDescription());
        project.setTechStack(projectDetails.getTechStack());
        project.setGithubLink(projectDetails.getGithubLink());
        return projectRepository.save(project);
    }

    public void delete(Long id) {
        Project project = findById(id);
        projectRepository.delete(project);
    }
}
