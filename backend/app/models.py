from django.db import models

# Create your models here.
class Pessoa(models.Model):
    MASCULINO = 'M'
    FEMININO = 'F'

    EF = 'EF'
    EM = 'EM'
    ES = 'ES'

    FORMACAO = (
        (EM , 'Ensino Fundamental Completo'),
        (EF , 'Ensino Médio Completo'),
        (ES , 'Ensino Superior Completo')
    )

    SEXOS = (
        (MASCULINO, 'Masculino'),
        (FEMININO, 'Feminino')
    )

    nome_completo = models.CharField(
        max_length=50
    )
    email = models.EmailField()
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
