import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Pessoa } from 'src/app/Pessoa';
import { PessoasService } from 'src/app/pessoas.service';



@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css',
]

})

export class PessoasComponent implements OnInit {

  formulario: any;
  tituloFormulario:any;
  public pessoas?:Pessoa[];
  formGroup?:FormGroup;
  modoEdicao : boolean = false;
  id?: number; 

  


  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  modalRef?:BsModalRef;


  constructor(private PessoasService : PessoasService, private formBuilder: FormBuilder) {

 


   }

 

  ngOnInit(): void {


    

    this.PessoasService.PegarTodos().subscribe(resultado =>{
    this.pessoas = resultado    
    
    });
    
    
    this.formGroup=this.formBuilder.group({
      nomeCompleto: ['', Validators.required], 
      cnpj: ['', Validators.required],
      endereco: ['', Validators.required], 
      nomeProjeto: ['', Validators.required],
      codigoProjeto: ['', Validators.required], 
      valorProjeto: ['', Validators.required],



    });

   } 


    ExibirFormularioCadastro(): void {
      this.visibilidadeTabela =false;
      this.visibilidadeFormulario = true;
      this.tituloFormulario="Nova Pessoa";
      this.formulario = new FormGroup({        
        nomecompleto: new FormControl(null),
        cnpj: new FormControl(null),
        endereco: new FormControl(null),
        nomeprojeto: new FormControl(null),
        codigoprojeto: new FormControl(null), 
        valorprojeto: new FormControl(null)
      });

    } 


 

     Voltar(): void{
      this.visibilidadeTabela =true;
      this.visibilidadeFormulario = false;
     }   
     
     public deletar(pessoas:any) {
       
       this.PessoasService.ExcluirPessoa(pessoas.id.toString()).
       subscribe(pessoas => this.atualizar(),
       error => console.error(error));
       alert("Usuário Excluído com Sucesso!!!")
    
     }

     public atualizar(){
      this.PessoasService.PegarTodos().
      subscribe(retorno => this.pessoas = retorno)
      }


     ExibirFormularioEdite(pessoas:Pessoa): void {
      this.visibilidadeTabela =false;
      this.visibilidadeFormulario = true;
      this.tituloFormulario="Editar Pessoa";
      this.formulario = new FormGroup({ 
        id: new FormControl(pessoas.id),      
        nomecompleto: new FormControl(pessoas.nomeCompleto),
        cnpj: new FormControl(pessoas.cnpj),
        endereco: new FormControl(pessoas.endereco),
        nomeprojeto: new FormControl(pessoas.nomeProjeto),
        codigoprojeto: new FormControl(pessoas.codigoProjeto), 
        valorprojeto: new FormControl(pessoas.valorProjeto)      
      
    })
    }






    EnviarFormularioo(): void {
      const pessoa: Pessoa = this.formulario.value;
  
      if (pessoa.id! > 0) {
        this.PessoasService.AtualizarPessoa(pessoa).subscribe((resultado) => {
          this.visibilidadeFormulario = false;
          this.visibilidadeTabela = true;
          alert('Usuário atualizado com sucesso!!!');
          this.PessoasService.PegarTodos().subscribe((registros) => {
            this.pessoas = registros;
          });
        });
      } else {
        this.PessoasService.SalvarPessoa(pessoa).subscribe((resultado) => {
          this.visibilidadeFormulario = false;
          this.visibilidadeTabela = true;
          alert('Usuário inserido com sucesso!!!');
          this.PessoasService.PegarTodos().subscribe((registros) => {
            this.pessoas = registros;
          });
        });
      }
    }

  }





 