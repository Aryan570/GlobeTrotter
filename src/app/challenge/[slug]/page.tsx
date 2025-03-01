import Challenge from "@/app/components/Challenge";

export default async function New_Home({params} : {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <Challenge slug={slug}/>
    </div>
  );
}