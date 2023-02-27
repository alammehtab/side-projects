package com.alam.blogappbackend.services.impl;

import com.alam.blogappbackend.services.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {
    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {
        // getting file name
        String originalFilename = file.getOriginalFilename();

        // generating random file name
        String randomId = UUID.randomUUID().toString();

        String randomFileName = randomId.concat(originalFilename.substring(originalFilename.lastIndexOf(".")));

        // create file path
        String filePath = path + File.separator + randomFileName;

        // create folder if not already
        File f = new File(path);
        if (!f.exists()) {
            f.mkdir();
        }

        // copy file
        Files.copy(file.getInputStream(), Paths.get(filePath));

        return randomFileName;
    }

    @Override
    public InputStream getResources(String path, String fileName) throws FileNotFoundException {
        String fullPath = path + File.separator + fileName;
        InputStream inputStream = new FileInputStream(fullPath);

        return inputStream;
    }
}
