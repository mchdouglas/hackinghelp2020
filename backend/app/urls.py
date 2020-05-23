from rest_framework import routers

from app.views import PessoaViewSet, EmpresaViewSet

router = routers.DefaultRouter()
router.register('pessoas', PessoaViewSet)
router.register('empresas', EmpresaViewSet)

urlpatterns = router.urls