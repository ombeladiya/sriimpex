import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 py-16 sm:p-24">
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-2xl sm:text-4xl text-black mb-8 max-lg:text-center">
            Product list
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/product/mirchi-powder"
              className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://assets.epicurious.com/photos/63111762d3f76b91588119b6/1:1/w_2560%2Cc_limit/Garam_Masala_RECIPE_082522_39348.jpg" alt="face cream image"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    Face cream</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">Orange & Aloe Vera</p>
              </div>
            </Link>

            <Link href="/product/haldi-powder"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://vedicchakki.com/wp-content/uploads/2022/05/haldi-600x600.jpg" alt="plastic bottle image"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    Plstic bottle</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">Black color</p>
              </div>
            </Link>

            <Link href="/product/mirchi-powder"
              className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://5.imimg.com/data5/SELLER/Default/2024/1/382129633/SF/JB/MS/526528/laving-clove-syzygium-aromaticum-laung-clove-flower-clove-leaf-girofle-lavanga-500x500.jpg" alt="cream image"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold text-xl leading-8 text-black  transition-all duration-500 group-hover:text-cyan-900">
                    Men cream</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">Aloe Vera and Neem</p>
              </div>
            </Link>

            <Link href="/product/mirchi-powder"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://theorganicbite.com/cdn/shop/products/RedChilliBoth-04_1500x.png?v=1700890180" alt="perfume bottle image"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    Cold Perfume</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">White perfume</p>
              </div>
            </Link>
            <Link href="/product/mirchi-powder"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://theorganicbite.com/cdn/shop/products/RedChilliBoth-04_1500x.png?v=1700890180" alt="perfume bottle image"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    Cold Perfume</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">White perfume</p>
              </div>
            </Link>
            <Link href="/product/mirchi-powder"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://theorganicbite.com/cdn/shop/products/RedChilliBoth-04_1500x.png?v=1700890180" alt="perfume bottle image"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    Cold Perfume</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">White perfume</p>
              </div>
            </Link>
            <Link href="/product/mirchi-powder"
              className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://assets.epicurious.com/photos/63111762d3f76b91588119b6/1:1/w_2560%2Cc_limit/Garam_Masala_RECIPE_082522_39348.jpg" alt="face cream image"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    Face cream</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">Orange & Aloe Vera</p>
              </div>
            </Link>
            <Link href="/product/haldi-powder"
              className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
              <div className="">
                <img src="https://vedicchakki.com/wp-content/uploads/2022/05/haldi-600x600.jpg" alt="plastic bottle image"
                  className="w-full aspect-square rounded-2xl" />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6
                    className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-cyan-900">
                    Plstic bottle</h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">Black color</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
