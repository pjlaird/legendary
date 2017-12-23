import org.jetbrains.kotlin.gradle.plugin.KotlinPluginWrapper
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.springframework.boot.gradle.tasks.run.BootRun

group = "com.lucaboq.legendary"
version = "1.0.0-SNAPSHOT"

val kotlinVersion: String by project.extra
val springBootVersion: String by project.extra

buildscript {
    project.apply { from(project.file("gradle/config.gradle.kts")) }

    val kotlinVersion: String by project.extra
    val springBootVersion: String by project.extra

    repositories {
        mavenCentral()
        maven(url = "https://repo.spring.io/snapshot")
        maven(url = "https://repo.spring.io/milestone")
    }

    dependencies {
        classpath(kotlin("gradle-plugin", kotlinVersion))
        classpath("org.springframework.boot:spring-boot-gradle-plugin:$springBootVersion")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
        classpath("org.jetbrains.kotlin:kotlin-allopen:$kotlinVersion")
    }

}

plugins {
    // WHY! For some reason gradle will bot let you access variables here
    val kotlinVersion = "1.2.10"

    application
    kotlin("jvm") version kotlinVersion
    id("org.jetbrains.kotlin.plugin.spring") version kotlinVersion
    id("org.springframework.boot") version "1.5.9.RELEASE"
    id("io.spring.dependency-management") version "1.0.4.RELEASE"
}

application {
    mainClassName = "com.lucaboq.legendary.ApplicationKt"
}

repositories {
    mavenCentral()
    maven(url = "https://repo.spring.io/snapshot")
    maven(url = "https://repo.spring.io/milestone")
    jcenter()
}

dependencies {
    compile(kotlin("stdlib-jdk8", kotlinVersion))
    compile(kotlin("reflect", kotlinVersion))
    compile("org.springframework.boot:spring-boot-starter-actuator:$springBootVersion")
    compile("org.springframework.boot:spring-boot-starter-webflux:$springBootVersion")
    compile("org.springframework.boot:spring-boot-starter-websocket:$springBootVersion")
    compile("com.fasterxml.jackson.module:jackson-module-kotlin:2.9.0")
    testCompile("org.springframework.boot:spring-boot-starter-test:$springBootVersion")
    testCompile("io.projectreactor:reactor-test")
}

tasks {
    withType<KotlinCompile> {
        kotlinOptions {
            languageVersion = "1.2"
            apiVersion = "1.2"
            jvmTarget = "1.8"
        }
    }
    withType<BootRun> {
        // Ensures IntelliJ can live reload resource files
        val sourceSets = the<JavaPluginConvention>().sourceSets
        sourceResources(sourceSets["main"])
    }
}
