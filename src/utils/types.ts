// Context API Types

export type ContextType = {
    data: { id: number, name: string, description: string }[],
    setData: React.Dispatch<React.SetStateAction<{
        id: number;
        name: string;
        description: string;
    }[]>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export type IChildren = {
    children: React.ReactNode
}

export type Idata = {
    id: number, name: string, description: string
}

// Tabel Component Types

export type ITabel = {
    tabelHead: {
        id: number,
        name: string,
        description: string
    }
}

export type ITabelData = {
    tabel: {
        id: number,
        name: string,
        description: string,
    }[],
    editClick: (data: Idata) => void
}

// Input Component Types

export type Iinput = {
    reason: 'create' | 'update',
    data: Idata,
    cancelEditHandler: () => void,
    formUpdate: (data: Idata) => void,
    handleCreate: (data: Idata) => void
}

// Icon Component Types

export type IconType = {
    data: Idata,
    editIconActive: boolean,
    editPopup: number | null,
    handler1: (id: number) => void,
    handler2: () => void,
    editClick: (data: Idata) => void
}