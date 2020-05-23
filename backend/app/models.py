from django.db import models

# Create your models here.
class Pessoa(models.Model):
    MASCULINO = 'M'
    FEMININO = 'F'

    SEXOS = (
        (MASCULINO, 'Masculino'),
        (FEMININO, 'Feminino')
    )

    nome_completo = models.CharField(
        max_length=50
    )
    email = models.EmailField()
    idade = models.IntegerField()
    formacao = models.CharField(
        max_length=50
    )
    auto_descricao = models.CharField(
        max_length=50
    )
    sexo = models.CharField(
        max_length=1,
        choices=SEXOS
    )
