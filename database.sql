-- Users Table
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    workspace_id INT REFERENCES Workspace(workspace_id),
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transactions Table
CREATE TABLE Transactions (
    transaction_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL,
    created_by INT REFERENCES Users(user_id),
    type VARCHAR(50) CHECK (type IN ('income', 'expense')),
    workspace_id INT REFERENCES Workspace(workspace_id),
    amount NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Workspace Table
CREATE TABLE Workspace (
    workspace_id SERIAL PRIMARY KEY,
    workspace_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Workspace Members Join Table
CREATE TABLE WorkspaceMembers (
    workspace_id INT REFERENCES Workspace(workspace_id),
    user_id INT REFERENCES Users(user_id),
    PRIMARY KEY (workspace_id, user_id)
);
