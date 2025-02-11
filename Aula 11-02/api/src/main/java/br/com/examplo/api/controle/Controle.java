package br.com.examplo.api.controle;

import org.springframework.web.bind.annotation.RestController;

import br.com.examplo.api.modelo.Pessoa;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class Controle {
    @GetMapping("")
    public String mensagem() {
        return "Olá, Mundo";
    }
    
    @GetMapping("/boasVindas")
    public String boasVindas() {
        return "Seja bem vindo(a)";
    }

    @GetMapping("/boasVindas/{nome}")
    public String boasVindas(@PathVariable String nome) {
        return "Seja bem vindo(a) " + nome;
    }
    
    @PostMapping("/pessoa")
    public Pessoa pessoa (@RequestBody Pessoa p) {
        return p;
    }
    
}
