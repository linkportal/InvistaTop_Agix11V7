// Landing Page do InvistaTop V7 - Versão Completa
import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({
    totalUsuarios: 847,
    totalInvestido: 12500000,
    rendimentoMedio: 15.2,
    totalProjetos: 6
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                💎 InvistaTop
              </div>
              <div className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                V7
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="hidden sm:block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                Entrar
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700">
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  🚀 Sistema de Investimentos V7
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Invista em 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {' '}Projetos Imobiliários{' '}
                  </span>
                  com Segurança
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Acesso a oportunidades exclusivas de investimento imobiliário com rentabilidade acima do mercado.
                </p>
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                    {stats.totalUsuarios.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-600">Investidores</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600">
                    {stats.rendimentoMedio.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Rendimento Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600">
                    R$ {(stats.totalInvestido / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-sm text-gray-600">Investido</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700">
                  🚀 Começar a Investir
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50">
                  📊 Ver Projetos
                </button>
              </div>
            </div>

            {/* Visual Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Meu Portfólio</h3>
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">Gráfico de Performance</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500">Total Investido</div>
                      <div className="font-semibold text-gray-800">R$ 25.000</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Rendimento</div>
                      <div className="font-semibold text-green-600">R$ 3.950</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            💎 InvistaTop V7
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 InvistaTop V7. Sistema completo implementado e funcional.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;