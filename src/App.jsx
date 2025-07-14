// App Principal do InvistaTop V7 - Sistema Completo e Otimizado
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AuthSystem from './components/AuthSystem';  
import AdminPanel from './components/AdminPanel';
import UserSystem from './components/UserSystem';

// Configuração Supabase unificada
const supabaseUrl = 'https://bhhynlkstyraemgkj\hoe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoaHlubGtzdHlyYWVtZ2tqaG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTA5NTAsImV4cCI6MjA2Nzg4Njk1MH0.FnPMp882tTyKwka73jzsgfMfh0nGO4K5pyL34TJtUUQ';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar sessão salva
    const savedUser = localStorage.getItem('investaTopUser') || sessionStorage.getItem('investaTopUser');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        if (userData.nivel === 'ADMIN') {
          setCurrentView('admin');
        } else {
          setCurrentView('user');
        }
      } catch (error) {
        console.error('Erro ao carregar usuário salvo:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    if (userData.nivel === 'ADMIN') {
      setCurrentView('admin');
    } else {
      setCurrentView('user');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('investaTopUser');
    sessionStorage.removeItem('investaTopUser');
    setCurrentView('landing');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-700">InvistaTop V7</h2>
          <p className="text-gray-500 mt-2">Carregando sistema...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App min-h-screen">
      {/* Header de Navegação */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentView('landing')}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                💎 InvistaTop V7
              </button>
              <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                ✅ Sistema Completo
              </div>
            </div>
            
            <nav className="flex items-center gap-4">
              <button
                onClick={() => setCurrentView('landing')}
                className={`px-3 py-2 rounded-lg transition ${currentView === 'landing' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                🌟 Landing
              </button>
              <button
                onClick={() => setCurrentView('auth')}
                className={`px-3 py-2 rounded-lg transition ${currentView === 'auth' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                🔐 Login
              </button>
              {user && (
                <>
                  {user.nivel === 'ADMIN' && (
                    <button
                      onClick={() => setCurrentView('admin')}
                      className={`px-3 py-2 rounded-lg transition ${currentView === 'admin' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      👨‍💼 Admin
                    </button>
                  )}
                  <button
                    onClick={() => setCurrentView('user')}
                    className={`px-3 py-2 rounded-lg transition ${currentView === 'user' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    👤 Sistema
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    🚪 Sair
                  </button>
                </>
              )}
              {!user && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Supabase Conectado</span>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-16">
        {currentView === 'landing' && <LandingPage />}
        {currentView === 'auth' && <AuthSystem onLogin={handleLogin} />}
        {currentView === 'admin' && user && user.nivel === 'ADMIN' && <AdminPanel user={user} onLogout={handleLogout} />}
        {currentView === 'user' && user && <UserSystem user={user} onLogout={handleLogout} />}
      </main>
    </div>
  );
}

export default App;