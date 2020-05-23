from django.db import models

# Create your models here.


class Pessoa(models.Model):
    MASCULINO = 'M'
    FEMININO = 'F'
    OUTRO = 'O'

    EF = 'EF'
    EFI = 'EFI'
    EM = 'EM'
    EMI = 'EMI'
    ES = 'ES'
    ESI = 'ESI'

    FORMACAO = (
        (EF, 'Ensino Fundamental Completo'),
        (EFI, 'Ensino Fundamental Incompleto'),
        (EM, 'Ensino Médio Completo'),
        (EMI, 'Ensino Médio Incompleto'),
        (ES, 'Ensino Superior Completo'),
        (ES, 'Ensino Superior Incompleto')
    )

    SEXOS = (
        (MASCULINO, 'Masculino'),
        (FEMININO, 'Feminino'),
        (OUTRO, 'Prefiro não dizer')
    )

    nome_completo = models.CharField(
        max_length=50
    )
    email = models.EmailField()
    celular = models.CharField(
        max_length=20,
    )
    data_nascimento = models.DateField()
    formacao = models.CharField(
        max_length=50,
        choices=FORMACAO
    )
    auto_descricao = models.CharField(
        max_length=50
    )
    sexo = models.CharField(
        max_length=1,
        choices=SEXOS
    )
    atributo = models.ForeignKey(
        to='app.Atributo',
        on_delete=models.DO_NOTHING
    )


class Empresa(models.Model):
   
    nome_da_empresa = models.CharField(
        max_length=50
    )
    segmento = models.ForeignKey(
        to='app.Segmento',
        on_delete=models.DO_NOTHING
    )
    telefone_empresarial= models.CharField(
        max_length=20,
    )
    email = models.EmailField()

class Segmento(models.Model):
    
    nome_segmento = models.CharField (
        max_length=300,
    )

class Atributo(models.Model):
    
    nome_atributo = models.CharField (
        max_length=300,
    )