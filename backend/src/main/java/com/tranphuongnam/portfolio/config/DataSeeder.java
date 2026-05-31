package com.tranphuongnam.portfolio.config;

import com.tranphuongnam.portfolio.entity.Project;
import com.tranphuongnam.portfolio.entity.Skill;
import com.tranphuongnam.portfolio.repository.ProjectRepository;
import com.tranphuongnam.portfolio.repository.SkillRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {
    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;

    public DataSeeder(ProjectRepository projectRepository, SkillRepository skillRepository) {
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
    }

    @Override
    public void run(String... args) {
        if (skillRepository.count() == 0) {
            skillRepository.saveAll(List.of(
                    skill("Java", "Backend", 90),
                    skill("Spring Boot", "Backend", 88),
                    skill("RESTful API Design", "Backend", 86),
                    skill("Spring Security", "Security", 82),
                    skill("JWT Authorization", "Security", 80),
                    skill("Python", "Backend", 72),
                    skill("C#", "Backend", 70),
                    skill("React.js", "Frontend & Mobile", 86),
                    skill("HTML5/CSS3", "Frontend & Mobile", 82),
                    skill("Flutter", "Frontend & Mobile", 78),
                    skill("Dart", "Frontend & Mobile", 76),
                    skill("SQL Server", "Database & Cloud", 84),
                    skill("Firebase", "Database & Cloud", 74),
                    skill("Git", "Database & Cloud", 82),
                    skill("Azure Cloud", "Database & Cloud", 70)
            ));
        }

        if (projectRepository.count() == 0) {
            projectRepository.saveAll(List.of(
                    project(
                            "SmartMoney",
                            "Personal finance management application supporting expense tracking, financial planning, and chart-based data visualization. Built a Spring Boot RESTful API optimized for financial calculation logic, developed responsive React web and Flutter/Dart mobile interfaces, and integrated SQL/Firebase for real-time data synchronization across devices. Duration: 2025 - 2026.",
                            "Spring Boot RESTful API, React.js, Flutter, Dart, SQL, Firebase",
                            "https://github.com/ISol2303"
                    ),
                    project(
                            "OGCamping",
                            "Campsite booking and service management system for camping packages and outdoor gear rental. Built CRUD APIs with Spring Boot, implemented 3-tier authorization for Admin, Staff, and User using Spring Security and JWT, developed staff order and over-the-counter invoicing logic, integrated an Ollama/Web Speech API voice assistant, and created an interactive campsite simulation with real-time price updates. Duration: 01/2026 - Present.",
                            "Spring Boot, Spring Security, JWT, React.js, Axios, Ollama, Web Speech API, SQL Server",
                            "https://github.com/ISol2303"
                    )
            ));
        }
    }

    private Skill skill(String name, String category, int proficiency) {
        Skill skill = new Skill();
        skill.setName(name);
        skill.setCategory(category);
        skill.setProficiency(proficiency);
        return skill;
    }

    private Project project(String name, String description, String techStack, String githubLink) {
        Project project = new Project();
        project.setName(name);
        project.setDescription(description);
        project.setTechStack(techStack);
        project.setGithubLink(githubLink);
        return project;
    }
}
