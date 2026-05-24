import React from 'react';
import CodeViewerContact from './codeviewercontact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        

        {/* BAGIAN KANAN: Form Input */}
        <div className="w-full md:w-1/2 p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input 
                type="text" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nama..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@anda.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pesan</label>
              <textarea 
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full  text-white flex flex-col justify-center">
          <CodeViewerContact />
            
          
        </div>

      </div>
    </div>
  );
};

export default ContactPage;