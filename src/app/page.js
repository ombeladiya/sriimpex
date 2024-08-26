"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 py-16 sm:p-24">
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-2xl sm:text-2xl text-green-800 mb-8 max-lg:text-center">
            Product list
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <Link href="/product/1"
              className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_4XFWaIbw6nBA1tSNScHvxR-iNKcPri8mnDM24T-F4ZkMfJIcl2D7w1eWfoaLZmgIk4qO156VztpB0luItpYkxst6xhK_iIeM8n20OGAtRjXIz4CTmMNOtg&usqp=CAE" alt="dehydrated white onion kibbled"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    dehydrated white</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion kibbled</p>
              </div>
            </Link>

            <Link href="/product/2"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/EH/QI/RQ/SELLER-46244442/dehydrated-onion-chopped-3-mm-to-5-mm-500x500.JPG" alt="dehydrated white onion chopped 3mm-5mm"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    dehydrated white </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion chopped 3mm-5mm</p>
              </div>
            </Link>

            <Link href="/product/3"
              className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/9/347230551/PH/XH/ZJ/192551431/dehydrated-white-onion-minced.jpg" alt="dehydrated white onion minced"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black  transition-all duration-500 group-hover:text-cyan-900">
                    dehydrated white </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion minced 1mm - 3mm</p>
              </div>
            </Link>

            <Link href="/product/4"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/SELLER/Default/2024/5/422231190/RZ/NV/GC/2548416/dehydrated-white-onion-granules.png" alt="dehydrated white onion granules"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    dehydrated white </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion granules</p>
              </div>
            </Link>
            <Link href="/product/5"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://tanisiincorporation.com/wp-content/uploads/2021/07/white-powder-tanisi.png" alt="dehydrated white onion powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    dehydrated white </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion powder</p>
              </div>
            </Link>
            <Link href="/product/6"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/KP/SK/RY/SELLER-94661056/dehydrated-red-onion-powder.jpg" alt="dehydrated red onion powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    dehydrated red </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion powder</p>
              </div>
            </Link>
            <Link href="/product/7"
              className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/RS/UD/JJ/125175357/dehydrated-pink-onion-flakes-500x500.jpg" alt="dehydrated red onion granules"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    dehydrated red </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion granules</p>
              </div>
            </Link>
            <Link href="/product/8"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUrpvfzAezfnKfnzhxLLxC9l8DoLXLBoxcQ&s" alt="dehydrated red onion minced"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    dehydrated red</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion minced 1mm - 3mm</p>
              </div>
            </Link>
            <Link href="/product/9"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://tiimg.tistatic.com/fp/1/008/450/dehydrated-red-onion-chopped-packaging-size-20-kg-452.jpg" alt="dehydrated red onion chopped"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated red </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion chopped 3mm-5mm</p>
              </div>
            </Link>
            <Link href="/product/10"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/8/336533615/CU/VA/DV/639811/dehydrated-red-onion-flakes-kibbled.png" alt="dehydrated red onion kibbled"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated red </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion kibbled</p>
              </div>
            </Link>
            <Link href="/product/11"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://img3.exportersindia.com/product_images/bc-full/2021/12/9169679/dehydrated-pink-onion-flakes-1639046026-6110447.jpeg" alt="dehydrated pink onion flakes"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated pink</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500"> onion flakes</p>
              </div>
            </Link>
            <Link href="/product/12"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/RS/UD/JJ/125175357/dehydrated-pink-onion-flakes-500x500.jpg" alt="dehydrated pink onion granules"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated pink</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion granules</p>
              </div>
            </Link>
            <Link href="/product/13"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/2/GG/EZ/IJ/125175357/dehydrated-pink-onion-powder.JPG" alt="dehydrated pink onion powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated pink</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion powder</p>
              </div>
            </Link>
            <Link href="/product/14"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://images.jdmagicbox.com/quickquotes/images_main/dehydrated-toasted-onion-chopped-372682330-rio70.png" alt="toasted onion chopped"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">toasted onion </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">chopped</p>
              </div>
            </Link>
            <Link href="/product/15"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://udcrops.com/wp-content/uploads/2021/10/6.png" alt="toasted onion kibbled"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">toasted onion</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">kibbled</p>
              </div>
            </Link>
            <Link href="/product/16"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://primeagrofoodproducts.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-05-07-at-4.47.38-PM.jpeg" alt="toasted onion powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">toasted onion </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">powder</p>
              </div>
            </Link>
            <Link href="/product/17"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://naturalagrofood.com/assets/img/product/crispy-fried-onion-chopped.jpg" alt="crispy fried onion chopped"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">crispy fried </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion chopped</p>
              </div>
            </Link>
            <Link href="/product/18"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://naturalagrofood.com/assets/img/product/crispy-fried-onion-kibbled.jpg" alt="crispy fried onion kibbled"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">crispy fried </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion kibbled</p>
              </div>
            </Link>
            <Link href="/product/19"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://naturalagrofood.com/assets/img/product/crispy-fried-onion-powder.jpg" alt="crispy fried onion powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">crispy fried </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">onion powder</p>
              </div>
            </Link>
            <Link href="/product/20"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://tanisiincorporation.com/wp-content/uploads/2021/07/garlic-cloves.png" alt="dehydrated garlic cloves"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">garlic cloves</p>
              </div>
            </Link>
            <Link href="/product/21"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://www.asianfoodexport.com/images/product/dehydrated-garlic-chopped.jpg" alt="dehydrated garlic chopped"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated garlic </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">chopped 3mm - 5mm</p>
              </div>
            </Link>
            <Link href="/product/22"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://www.eurofoods.in/images/products/Dehydrated-Garlic-Minced.jpg" alt="dehydrated garlic minced"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated garlic</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">minced 1mm - 3mm</p>
              </div>
            </Link>
            <Link href="/product/23"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://tiimg.tistatic.com/fp/1/006/196/light-brown-dehydrated-garlic-granules-943.jpg" alt="dehydrated garlic granules"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated garlic </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">granules</p>
              </div>
            </Link>
            <Link href="/product/24"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://tiimg.tistatic.com/fp/1/008/612/dehydrated-garlic-powder-154.jpg" alt="dehydrated garlic powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">dehydrated garlic </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">powder</p>
              </div>
            </Link>
            <Link href="/product/25"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://5.imimg.com/data5/EM/UB/BP/SELLER-94661056/lemon-powder-spray-dried-.jpg" alt="lemon powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">lemon </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">powder</p>
              </div>
            </Link>
            <Link href="/product/26"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://www.naatigrains.com/image/cache/catalog/naatigrains-products/NG121/pure-turmeric-powder-hand-processed-solar-dried-stone-order-now-online-organic-grinded-by-naati-grains-1000x1000.jpg" alt="turmeric powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">turmeric </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">powder</p>
              </div>
            </Link>
            <Link href="/product/27"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://www.medikonda.com/cdn/shop/articles/Medikonda-Beetroot-Powder_600x.webp?v=1684485707" alt="beet powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">Beet</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">powder</p>
              </div>
            </Link>
            <Link href="/product/28"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://www.aarkayfoods.in/images/products/tomato-powder/tomato-powder.jpg" alt="tomato powder"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">tomato</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">powder</p>
              </div>
            </Link>
            <Link href="/product/29"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://m.media-amazon.com/images/I/51vpZrRFHoL._AC_UF1000,1000_QL80_.jpg" alt="coriander"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">coriander</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">seeds</p>
              </div>
            </Link>
            <Link href="/product/30"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://www.indianasapplepie.com/cdn/shop/articles/IMG-1444_1600x.jpg?v=1689862468" alt="cumin"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">cumin</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">seeds</p>
              </div>
            </Link>
            <Link href="/product/31"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://hips.hearstapps.com/hmg-prod/images/fenugreek-feature-1676488089.jpg" alt="fenugreek"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">fenugreek</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">seeds</p>
              </div>
            </Link>
            <Link href="/product/32"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://www.currylovers.co.za/wp-content/uploads/2023/08/mustard-seeds-1.jpg" alt="mustard"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">mustard</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">seeds</p>
              </div>
            </Link>
            <Link href="/product/33"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://organicmandya.com/cdn/shop/files/FennelSeeds_2_39754dde-d629-40b4-a05e-5d4a6dc1bdf9.jpg?v=1719081847&width=1024" alt="fennel seeds"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">fennel</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">seeds</p>
              </div>
            </Link>
            <Link href="/product/34"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://5.imimg.com/data5/TM/NP/MY-69811358/indian-coconut-exports.jpg" alt="coconut"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">coconut</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">indian</p>
              </div>
            </Link>
            <Link href="/product/35"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div>
                <img src="https://www.agrocrops.com//front/agrocrop_products/1686833605_Bold.jpg" alt="peanut seeds"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold capitalize text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">peanut</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">seeds</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
