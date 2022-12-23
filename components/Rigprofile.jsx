

const RigProfile = () => {
    return (
        <>
            <div className="max-w-xs flex flex-col rounded-lg overflow-hidden bg-white shadow mx-auto my-2 md:my-4 border border-gray-300">
                <img className="h-48 w-full object-fill"
                    src="https://cdn.w600.comps.canstockphoto.com/team-of-workers-stock-photos_csp41184230.jpg"
                    alt="" />
            
                <div className="flex-1 px-6 py-4 mb-4">
                    <div className="font-bold text-xl mb-2">RIG NO :</div>
                    <p className="text-gray-700 text-base">ADDAM ROLLER</p>
                    <p className="truncate">infomation system aaaaaaaaaaaaaaaasddddddddddddddddddddddddddaaaaaaaa</p>
                </div>
             

               
                <div className="grid grid-cols-3 divide-x divide-gray-300 px-6 py-4 bg-gray-100 items-center text-center justify-center
                ">
                    <div className="flex items-center justify-center">Info</div>
                    <div className="flex items-center justify-center">Member</div>
                    <div className="flex items-center justify-center">Sites</div>
                </div>
               
            </div>
        </>
    )
};

export default RigProfile;