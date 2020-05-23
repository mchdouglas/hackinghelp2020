from rest_framework import routers

from app.views import PessoaViewSet, EmpresaViewSet, AtributoViewSet, SegmentoViewSet

router = routers.DefaultRouter()
router.register('pessoas', PessoaViewSet)
router.register('empresas', EmpresaViewSet)
router.register('atributos', AtributoViewSet)
router.register('segmentos', SegmentoViewSet)

urlpatterns = router.urls