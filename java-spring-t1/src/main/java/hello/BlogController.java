package hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BlogController {

    @Autowired
    BlogRepository blogRepository;

    @GetMapping("/blog")
    public List<Blog> index(){

        return blogRepository.findAll();
    }

    @PostMapping("/blog")
    public Blog create(@RequestBody Map<String, String> body) {
        String title = body.get("title");
        String content = body.get("content");

        return blogRepository.save(new Blog(title, content));
    }

    @GetMapping("/blog/{id}")
    public Blog show(@PathVariable String id){
        int blogId = Integer.parseInt(id);
        return blogRepository.findById(blogId).orElseThrow(() -> new NullPointerException());
    }

    @PostMapping("/blog/search")
    public List<Blog> search(@RequestBody Map<String, String> body){
        String searchTerm = body.get("text");
        return blogRepository.findByTitleContainingOrContentContaining(searchTerm, searchTerm);
    }

    @DeleteMapping("blog/{id}")
    public boolean delete(@PathVariable String id){
        int blogId = Integer.parseInt(id);
        blogRepository.deleteById(blogId);

        return true;
    }


}