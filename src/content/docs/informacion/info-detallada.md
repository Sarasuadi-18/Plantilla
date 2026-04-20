---
title: Información Detallada
---

### Parámetros del Cuerpo (Body)

| Parámetro | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :---: |
| `grant_type` | `string` | Debe ser `refresh_token` | ✅ |
| `client_id` | `string` | ID del cliente | ✅ |
| `client_secret` | `string` | Secreto del cliente | ✅ |
| `refresh_token` | `string` | Token de refresco previo | ✅ |