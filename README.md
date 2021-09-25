

# Amazon Clone

Bu projede nextjs ve redux-toolkit öğrenme sürecimi 
hızlandırmak için gerçekleştirmiş olduğum bir e-commerce 
projesidir.



## Demo

<<<<<<< HEAD
[canlı](https://amazon-clone-eight-flax.vercel.app/) bu linkten çalışmanın 
son haline bakabilirsiniz.

## Özellikler
- Ürün arama 
- Sepete ürün ekleme 
- Sepetten ürün silme
- Sepetteki ürün adetini değiştirme
- Ürün detay

## API Kullanımı

Api olarak hazır olan [fakestore.api](https://fakestoreapi.com/)'u kullandım. Detaylara 
ilgili linkten ulaşabilirsiniz genel olarak apinin çalışma mantığı aşağıdaki gibidir.

#### Tüm ürünleri getir

```http
  GET /products
```

#### Ürünü getir

```http
  GET /products/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |
  
## Kullanılan Teknolojiler


[![Next Badge](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) 
[![Redux Badge](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Typescript Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) 

## Ortam Değişkenleri

Bu projeyi çalıştırmak için aşağıdaki ortam değişkenlerini .env dosyanıza eklemeniz gerekecek

`GOOGLE_ID`

`GOOGLE_SECRET`

`NEXTAUTH_URL`
## Bilgisayarınızda Çalıştırın



Projeyi klonlayın

```bash
  git clone https://github.com/ysnbyzli/amazon-clone.git
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run start
```

  