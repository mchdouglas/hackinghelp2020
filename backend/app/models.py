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
    atributos = models.CharField(
        max_length=80,
    )


class Empresa(models.Model):
    ALIMENTACO = ' '
    BEBIDAS = ' '
    BANACARIO = ' '
    VESTUARIO = ' '
    SAUDE = ' '
    EDUCACAO= ' '
    INFORMATICA=' '
    OUTRO=' '

    SEGMENTOS = (
        (ALIMENTACO, 'Alimentação'),
        (BEBIDAS, 'Bebidas'),
        (BANACARIO, 'Bancário'),
        (VESTUARIO, 'Vestuário'),
        (SAUDE, 'Saúde'),
        (EDUCACAO, 'Educação'),
        (INFORMATICA, 'Informática'),
        (OUTRO, 'Outros'),
    )

    nome_da_empresa = models.CharField(
        max_length=50
    )
    segmentos = models.CharField (
        max_length=1,
        choices=SEGMENTOS,
    )
    telefone_empresarial= models.CharField(
        max_length=20,
    )
    email = models.EmailField()