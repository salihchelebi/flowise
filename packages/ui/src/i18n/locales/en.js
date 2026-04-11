const en = {
    common: {
        language: 'Language',
        turkish: 'Türkçe',
        english: 'English',
        itemsPerPage: 'Items per page:',
        itemsRange: '{start}-{end} / {total} items',
        state: 'State',
        startDate: 'Start date',
        endDate: 'End date',
        sessionId: 'Session ID',
        name: 'Name',
        lastUpdated: 'Last Updated',
        created: 'Created',
        keyName: 'Key Name',
        permissions: 'Permissions',
        usage: 'Usage',
        updated: 'Updated',
        more: 'More'
    },
    menu: {
        chatflows: 'Chatflows',
        agentflows: 'Agentflows',
        executions: 'Executions',
        assistants: 'Assistants',
        marketplaces: 'Marketplaces',
        tools: 'Tools',
        credentials: 'Credentials',
        variables: 'Variables',
        apiKeys: 'API Keys',
        documentStores: 'Document Stores'
    },
    pages: {
        chatflows: { title: 'Chatflows', description: 'Build single-agent systems, chatbots and simple LLM flows' },
        agentflows: { title: 'Agentflows', description: 'Multi-agent systems, workflow orchestration' },
        executions: { title: 'Agent Executions', description: 'Monitor and manage agentflows executions' },
        assistants: { title: 'Assistants', description: 'Chat assistants with instructions, tools, and files to respond to user queries' },
        marketplaces: { title: 'Marketplace', description: 'Explore and use pre-built templates' },
        tools: { title: 'Tools', description: 'External functions or APIs the agent can use to take action' },
        credentials: { title: 'Credentials', description: 'API keys, tokens, and secrets for 3rd party integrations' },
        variables: { title: 'Variables', description: 'Create and manage global variables' },
        apikeys: { title: 'API Keys', description: 'Flowise API & SDK authentication keys' },
        docstore: { title: 'Document Store', description: 'Store and upsert documents for LLM retrieval (RAG)' }
    },
    buttons: {
        addNew: 'Add New',
        create: 'Create',
        load: 'Load',
        addCredential: 'Add Credential',
        addVariable: 'Add Variable',
        createKey: 'Create Key',
        howToUse: 'How To Use',
        apply: 'Apply',
        reset: 'Reset',
        clearAll: 'Clear All'
    },
    placeholders: {
        searchNameOrCategory: 'Search Name or Category',
        searchTools: 'Search Tools [ Ctrl + F ]',
        searchCredentials: 'Search Credentials [ Ctrl + F ]',
        searchVariables: 'Search Variables [ Ctrl + F ]',
        searchApiKeys: 'Search API Keys [ Ctrl + F ]',
        searchMarketplace: 'Search Name/Description/Node [ Ctrl + F ]'
    },
    emptyStates: {
        noChatflows: 'No Chatflows Yet',
        noAgents: 'No Agents Yet',
        noExecutions: 'No Executions Yet',
        noTools: 'No Tools Created Yet',
        noCredentials: 'No Credentials Yet',
        noApiKeys: 'No API Keys Yet',
        noVariables: 'No Variables Yet',
        noDocumentStores: 'No Document Stores Created Yet',
        noMarketplace: 'No Marketplace Yet',
        noSavedCustomTemplates: 'No Saved Custom Templates'
    },
    marketplace: {
        tag: 'Tag',
        type: 'Type',
        framework: 'Framework',
        communityTemplates: 'Community Templates',
        myTemplates: 'My Templates',
        usecases: 'Usecases',
        table: {
            name: 'Name',
            type: 'Type',
            description: 'Description',
            framework: 'Framework',
            usecases: 'Use cases',
            badges: 'Badges',
            sharedTemplate: 'Shared Template',
            share: 'Share',
            delete: 'Delete'
        },
        templates: {}
    },
    assistants: {
        custom: {
            title: 'Custom Assistant',
            description: 'Create custom assistant using your choice of LLMs'
        },
        openai: {
            title: 'OpenAI Assistant',
            description: 'Create assistant using OpenAI Assistant API. This option is being deprecated; consider using Custom Assistant instead.'
        },
        deprecating: 'Deprecating'
    }
}

export default en
