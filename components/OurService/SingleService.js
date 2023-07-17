import Link from "next/link";

export default function SingleService({ service, otherServices }) {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="company_bg">
            <div className="px-5">
              <p className="text-base font-normal text-ntl_black pt-10">
                Home/<span className="text-ntl_orange">{service.name}</span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  {service.name}
                </p>
                <p className="text-base text-ntl_gray">{service.content}</p>
              </div>
            </div>
            <div className="border-dashed border-t-2 border-t-ntl_gray_2">
              <div className="p-5 xsm:px-0 xsm:pl-5">
                {otherServices.map((s) => (
                  <Link legacyBehavior key={s.id} href={`/services/${s.id}`}>
                    <a className="text-blue-500 mr-4">{s.name} for the stock market</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <p></p>
      </div>
    </>
  );
}
