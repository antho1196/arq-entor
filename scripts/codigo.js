// Menú de opciones en el aside
document.querySelector("aside button").addEventListener("click", function() {
    const menu = document.querySelector("aside ul");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});
// Función para manejar el cambio de contenido dinámico
document.querySelectorAll("aside ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el enlace realice su acción por defecto
        const contentType = this.getAttribute("data-content"); // Obtenemos el tipo de contenido del atributo data-content
        const dynamicContent = document.getElementById("dynamic-content");
        const fixedContent = document.querySelector(".fixed-content");

        // Ocultamos la sección fija cuando se hace clic en alguna opción del menú
        fixedContent.style.display = "none";
        dynamicContent.style.display = "block";

        // Cambiamos el contenido de acuerdo a la opción seleccionada
        switch (contentType) {
            case "productos":
                dynamicContent.innerHTML = `
                    <h2>Productos</h2>
                    <p>Aquí puedes ver nuestros productos.</p>
                     <ol id="product-list">
                        <li data-product="smartphones">Smartphones</li>
                        <li data-product="laptops">Laptops</li>
                        <li data-product="tablets">Tablets</li>
                    </ol>
                `;
                 // Añadimos eventos a los elementos de la lista
                 document.querySelectorAll("#product-list li").forEach(item => {
                    item.addEventListener("click", function() {
                        const productType = this.getAttribute("data-product");
                        showProductImages(productType);
                    });
                });
                break;
            case "reseña":
                dynamicContent.innerHTML = `
                    <h2>Reseñas</h2>
                    <p>Lee las reseñas de otros usuarios sobre nuestros productos.</p>
                `;
                break;
            case "blog":
                dynamicContent.innerHTML = `
                    <h2>Blog</h2>
                    <p>Explora nuestros artículos del blog con consejos y novedades.</p>
                `;
                break;
            case "acerca":
                dynamicContent.innerHTML = `
                    <h2>Acerca de Nosotros</h2>
                    <p>Somos Comparape, dedicados a ofrecerte las mejores comparaciones de productos.</p>
                `;
                break;
            default:
                dynamicContent.innerHTML = `
                    <h2>Inicio</h2>
                    <p>Bienvenido a la página principal de Comparape.</p>
                `;
                break;
        }
    });
});
// Función para mostrar imágenes basadas en el tipo de producto
function showProductImages(productType) {
    const dynamicContent = document.getElementById("dynamic-content");

    let imagesHTML = "";
    switch (productType) {
        case "smartphones":
            imagesHTML = `
                <h2>Smartphones</h2>
                 <div class="productos">
 <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Productos/sm-a356ezkaltp_1.webp">
    <figcaption>
                <a style="font-size:small;">Samsung</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>GALAXY A35 5G 6GB 128GB NEGRO</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/. 899</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./1,299.00</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-30%</div>
    </article>
 </section>
  <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Productos/sm-m556bzkmpeo_1.webp">
    <figcaption>
                <a style="font-size:small;">Samsung</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>GALAXY A55 5G 6GB 128GB NEGRO</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/. 1699.00</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./1,099.00</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-30%</div>
    </article>
 </section>
 <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Productos/mtuw3bea_1_1.webp">
    <figcaption>
                <a style="font-size:small;">Apple</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>iPhone 15 PRO Titanio Blanco</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/. 1699.00</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./1,099.00</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-30%</div>
    </article>
</section>
<section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Productos/13cblue_1a.webp">
    <figcaption>
                <a style="font-size:small;">Xiomi</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>Redmi 13C 256GB, 8GB ram, Negro</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/. 529.00</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./649.00</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-18%</div>
    </article>
</section>
<section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Productos/5109besy_1.webp">
    <figcaption>
                <a style="font-size:small;">Honor</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>Honor 200 Lite 256GB, 8GB, Negro</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/. 1099.90</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./1,399.90</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-21%</div>
    </article>
</section>
<section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Productos/s-l960.webp">
    <figcaption>
                <a style="font-size:small;">Samsung</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>Galaxy A21s 32GB 64GB 128GB Azul</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  3500.00</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./5,500.90</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-40%</div>
    </article>
</section>
            `;
            break;
        case "laptops":
            imagesHTML = `
                <h2>Laptops</h2>
                <div class="productos">
    <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Laptops/hp1.jpg">
    <figcaption>
                <a style="font-size:small;">Lenovo</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>LAPTOP LENOVO LOQ 15.6" AMD RYZEN 7 12GB RAM 512GB SSD</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  4,099</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./4,398.99</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-20%</div>
    </article>
 </section>
 <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Laptops/acer.jpg">
    <figcaption>
                <a style="font-size:small;">Acer</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>LAPTOP ACER AG15-31P-38E3 INTEL CORE I3 8GB RAM 512GB SSD 15.6”</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  1,399</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./1,699</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-25%</div>
    </article>
 </section>
 <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Laptops/asus.jpg">
    <figcaption>
                <a style="font-size:small;">Asus</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>LAPTOP ASUS X1605ZA-MB292 16.0', CORE I5-12500H</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  2,259</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./2.611</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-15%</div>
    </article>
 </section>
 <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Laptops/Asusgamer.jpg">
    <figcaption>
                <a style="font-size:small;">Asus</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>LAPTOP GAMER ASUS INTEL CORE I7-13620H DE 10 NÚCLEOS</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  5,799</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./6,799</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-25%</div>
    </article>
 </section>
 <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Laptops/HPGAMER.jpg">
    <figcaption>
                <a style="font-size:small;">HP</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>LAPTOP HP 15-FA0021LA INTEL CORE I5-12450H 8GB 512GB"</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  3,499</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./3,099</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-11%</div>
    </article>
 </section>
 <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Laptops/Lenovo.jpg">
    <figcaption>
                <a style="font-size:small;">Lenovo</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>LAPTOP LENOVO IDEAPAD 1 AMD RYZEN 5 7520U 16GB RAM 512GB</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  2,0099</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./2,399</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-13%</div>
    </article>
 </section>
            `;
            break;
        case "tablets": 
            imagesHTML = `
                <h2>Tablets</h2>
                <div class="productos">
    <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Tablets/Lenovo.jpg">
    <figcaption>
                <a style="font-size:small;">Lenovo</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>TABLET LENOVO M11 11" 128 GB 4 GB RAM</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  749</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./799</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-6%</div>
    </article>
 </section>
  <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Tablets/Samsung.jpg">
    <figcaption>
                <a style="font-size:small;">Samsung</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>TABLET SAMSUNG GALAXY A9 SM-X210NZAAPEO</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  579</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./699</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-17%</div>
    </article>
 </section>
   <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Tablets/Samsung1.jpg">
    <figcaption>
                <a style="font-size:small;">Samsung</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>TABLET SAMSUNG GALAXY S6 LITE 2024 SM-P620 10.4"</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  1,0099</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./1,299</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-17%</div>
    </article>
 </section>
    <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Tablets/TCL.jpg">
    <figcaption>
                <a style="font-size:small;">TCL</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>TCL TABLET TCL 7'' +32 GB 2  WIFI 8496G 4 & FLIP</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  299</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./319</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-6%</div>
    </article>
 </section>
     <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Tablets/TCL1.jpg">
    <figcaption>
                <a style="font-size:small;">TCL</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>TABLET TCL 10 GEN2 128 GB 10.4 WIFI 8496G 4 & FLI</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  599</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./749</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-20%</div>
    </article>
 </section>
   <section>
    <article>
        <figure><img class="celulares-samsung" src="../document/Tablets/Xiomi.jpg">
    <figcaption>
                <a style="font-size:small;">Xiomi</a>
                <p style="text-align:start;font-family:Tahoma; font-size:medium;"><strong>TABLET XIAOMI PAD SE 128 GB REDMI GRAPHITE GRAY 4 GB RAM</strong></p>
            </figcaption>
        <p style="font-size: large; color: red;font-family:Tahoma; font-size: medium;"><strong>S/.  629</strong> <span style="font-size:x-small; color: black;">Oferta</span></p>
        <s> S./679</s>
        <br>
        <br>
        <button>Agregar al carrito</button>
    </figure>
        <div class="descuento">-7%</div>
    </article>
 </section>
            `;
            break;
        default:
            imagesHTML = "<p>No se encontraron imágenes para este producto.</p>";
            break;
    }

    // Reemplazamos el contenido dinámico con las imágenes correspondientes
    dynamicContent.innerHTML = imagesHTML;
}


// Suscripción por correo
document.querySelector("footer .subscribe button").addEventListener("click", function() {
    const emailInput = document.querySelector("footer .subscribe input");
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(emailValue)) {
        alert("¡Gracias por suscribirte!");
    } else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
});
// Búsqueda de productos
document.querySelector("header input[type='text']").addEventListener("input", function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const products = document.querySelectorAll(".products .product-item");

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = productName.includes(searchTerm) ? "block" : "none";
    });
});


const cart = [];
document.querySelectorAll(".product-item button").forEach(button => {
    button.addEventListener("click", function() {
        const productName = this.closest(".product-item").querySelector("h3").textContent;
        cart.push(productName);
        updateCart();
    });
});

function updateCart() {
    const cartElement = document.querySelector(".cart") || document.createElement("ul");
    if (!cartElement.classList.contains("cart")) {
        cartElement.classList.add("cart");
        document.body.appendChild(cartElement);
    }

    cartElement.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        cartElement.appendChild(listItem);
    });

    alert("Producto agregado al carrito!");
}