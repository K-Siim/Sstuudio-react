import React from 'react';
import PhoneImage from "../../assets/Images/bxs_phone.png";
import MapImage from "../../assets/Images/Vector.png";
import TimeImage from "../../assets/Images/bi_clock-fill.png";

const ContactInfo = () => {
    return (
        <div className="max-w-5xl mx-auto py-10 px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Võtke minuga julgelt ühendust!</h2>
                <p className="text-gray-700 mt-2 text-lg">
                    Lisateabe saamiseks minu toodete ja teenuste kohta võtke julgelt e-posti teel ühendust.
                </p>
                <p className="text-gray-700 text-lg">
                    Olen alati valmis teid aitama ning nõu andma. Ärge kõhelge, vaid tegutsege!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <img src={MapImage} alt="Location" className="w-8 h-8" />
                        <p className="text-gray-800">Hariduse tn 12, Kuressaare, 93812 Saare maakond</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src={PhoneImage} alt="Phone" className="w-8 h-8" />
                        <p className="text-gray-800">+372 5348 4019</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src={TimeImage} alt="Time" className="w-8 h-8" />
                        <p className="text-gray-800">Neljapäev - Laupäev: 12:00 - 17:00 (Või erikokkuleppel)</p>
                    </div>
                </div>

                
                <form className=" p-6 rounded-lg shadow-md w-full space-y-8">
                    <div>
                        <label className="block text-gray-700 font-medium">Teie Nimi</label>
                        <input type="text" placeholder="Toivo Kask" className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-green-400" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email Address</label>
                        <input type="email" placeholder="näide@gmail.com" className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-green-400" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Teema</label>
                        <input type="text" placeholder="See valik on optimaalne" className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-green-400" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Sõnum</label>
                        <textarea placeholder="Tere! Sooviks küsida infot ühe toote kohta…" className="w-full p-3 border border-gray-300 rounded-lg bg-white h-28 focus:ring focus:ring-green-400"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                        Saada
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactInfo;
