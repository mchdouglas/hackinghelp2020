from rest_framework import serializers
from .models import Pessoa, Empresa, Atributo, Segmento


class PessoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoa
        fields = '__all__'


class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'

class AtributoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atributo
        fields = '__all__'

class SegmentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segmento
        fields = '__all__'
