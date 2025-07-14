-- Estrutura do Banco InvistaTop V7
-- 8 Tabelas PostgreSQL Supabase

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    senha TEXT NOT NULL,
    nivel VARCHAR(20) DEFAULT 'Bronze',
    saldo DECIMAL(15,2) DEFAULT 0.00,
    ativo BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Demais tabelas conforme documentação...