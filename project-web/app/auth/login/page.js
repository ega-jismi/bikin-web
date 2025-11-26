'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();

  // State untuk Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  // State untuk Modal Register & Success
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // --- LOGIKA LOGIN ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      document.cookie = "token=token-palsu-bebas; path=/; max-age=86400"; 
      router.push('/');
      setIsLoading(false);
    }, 1500);
  };

  // --- LOGIKA REGISTER ---
  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegistering(true);
    
    setTimeout(() => {
      setIsRegistering(false);
      setShowRegisterModal(false); // Tutup Form Daftar
      setShowSuccessModal(true);   // Munculkan Popup Sukses
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900 text-white">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px] animate-pulse" />
      <div className="absolute top-[40%] -right-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[100px] animate-pulse delay-1000" />
      <div className="absolute -bottom-[10%] left-[20%] h-[300px] w-[300px] rounded-full bg-pink-600/20 blur-[100px] animate-pulse delay-700" />

      {/* ======================= CARD LOGIN UTAMA ======================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative z-10 w-full max-w-md p-8"
      >
        <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl" />
        
        <div className="relative z-20">
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} 
              className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30 mb-4"
            >
              <span className="text-3xl">G</span>
            </motion.div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Selamat Datang
            </h1>
            <p className="text-gray-400 text-sm mt-2">Masuk untuk melanjutkan belanja</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <InputGroup 
              id="login-email" label="Email Address" type="email" icon="email"
              value={email} setValue={setEmail} focusedInput={focusedInput} setFocusedInput={setFocusedInput}
            />
            <InputGroup 
              id="login-pass" label="Password" type="password" icon="lock"
              value={password} setValue={setPassword} focusedInput={focusedInput} setFocusedInput={setFocusedInput}
            />

            {/* Link 'Lupa password?' sudah dihapus di sini */}

            <SubmitButton isLoading={isLoading} text="Masuk Sekarang" />

            <p className="text-center text-sm text-gray-400 mt-6">
              Belum punya akun?{' '}
              <button type="button" onClick={() => setShowRegisterModal(true)} className="font-medium text-blue-400 hover:text-blue-300 hover:underline">
                Daftar Gratis
              </button>
            </p>
          </form>
        </div>
      </motion.div>

      {/* ======================= MODAL REGISTER POPUP ======================= */}
      <AnimatePresence>
        {showRegisterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowRegisterModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-lg p-1"
            >
              <div className="relative rounded-2xl bg-gray-900 border border-white/10 shadow-2xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <button onClick={() => setShowRegisterModal(false)} className="text-gray-400 hover:text-white">✕</button>
                </div>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Buat Akun Baru</h2>
                <form onSubmit={handleRegister} className="space-y-5">
                  <RegisterInput placeholder="Nama Lengkap" icon="👤" />
                  <RegisterInput placeholder="Email Address" icon="✉️" type="email" />
                  <RegisterInput placeholder="Password" icon="🔒" type="password" />
                  <RegisterInput placeholder="Ulangi Password" icon="🛡️" type="password" />
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <input type="checkbox" required className="rounded border-gray-700 bg-gray-800" />
                    <span>Saya setuju dengan Syarat & Ketentuan</span>
                  </div>
                  <button type="submit" disabled={isRegistering} className="w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-bold text-white shadow-lg transition-all hover:shadow-green-500/30 disabled:opacity-70">
                    {isRegistering ? 'Mendaftarkan...' : 'Daftar Akun'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================= MODAL SUKSES ======================= */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 w-full max-w-sm bg-gray-900 border border-green-500/30 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(34,197,94,0.2)]"
            >
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50"
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-2">Pendaftaran Berhasil!</h3>
              <p className="text-gray-400 mb-6">Akun Anda telah dibuat. Silakan login untuk mulai berbelanja.</p>

              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg"
              >
                Login Sekarang
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// --- HELPER COMPONENTS ---
function InputGroup({ id, label, type, icon, value, setValue, focusedInput, setFocusedInput }) {
  return (
    <div className="relative group">
      <label className={`absolute left-3 transition-all duration-300 pointer-events-none ${focusedInput === id || value ? '-top-6 text-xs text-blue-400' : 'top-3 text-gray-400'}`}>
        {label}
      </label>
      <div className={`flex items-center justify-between rounded-xl border bg-gray-900/50 transition-all duration-300 ${focusedInput === id ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700 hover:border-gray-600'}`}>
        <input
          type={type} required value={value} onFocus={() => setFocusedInput(id)} onBlur={() => setFocusedInput(null)} onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent p-3 pl-4 text-white outline-none placeholder-transparent"
        />
        <div className="pr-4 text-gray-400">
          {icon === 'email' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>}
          {icon === 'lock' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
        </div>
      </div>
    </div>
  );
}

function RegisterInput({ placeholder, icon, type = "text" }) {
  return (
    <div className="group relative">
      <input type={type} required placeholder={placeholder} 
        className="w-full rounded-xl border border-gray-700 bg-gray-800/50 p-3 pl-4 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
      />
      <div className="absolute right-3 top-3.5 text-gray-400">{icon}</div>
    </div>
  );
}

function SubmitButton({ isLoading, text }) {
  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading} 
      className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isLoading ? <div className="flex items-center justify-center gap-2"><div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" /><span>Memproses...</span></div> : text}
    </motion.button>
  );
}
