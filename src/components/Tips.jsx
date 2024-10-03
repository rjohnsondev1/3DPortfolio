import React from 'react'

const Tips = ({ onClose }) => {

    const handleClose = (e) =>{
        e.stopPropagation()
        onClose(e)
    }
    return (
        <div className='absolute bottom-5 left-5 z-40 text-black-500 p-3 border-2 flex flex-col bg-gray-400 rounded '>
            <div>
                <h4 className='flex justify-center'>How to Navigate</h4>
                <ul>
                    <li><strong>Left Click </strong> Rotate the camera</li>
                    <li><strong>Click computer:</strong> To Interact </li>
                </ul>
            </div>
            {/* Center the button at the bottom */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={handleClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default Tips;

