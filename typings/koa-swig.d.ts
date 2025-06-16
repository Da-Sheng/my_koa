declare module 'koa-swig' {
    import { Context } from 'koa';

    interface KoaSwigOptions {
        autoescape?: boolean;
        root?: string;
        cache?: 'memory' | false;
        ext?: string;
        writeBody?: boolean;
        locals?: any;
        filters?: any;
        tags?: any;
        extensions?: any;
        varControls?: [string, string];
        tagControls?: [string, string];
        cmtControls?: [string, string];
    }

    interface RenderedSwig {
        /**
         * Set local variables
         */
        setLocals(args: { [key: string]: any }): void;

        /**
         * Get local variable by key
         */
        getLocals(key: string): any;
    }

    interface SwigRenderer {
        (view: string, options?: { [key: string]: any }): Promise<string>;
    }

    interface KoaSwigRenderer {
        (settings?: KoaSwigOptions): (
            ctx: Context
        ) => Generator<Promise<string>, void, unknown>;
    }

    const renderer: KoaSwigRenderer & {
        swig: RenderedSwig;
    };

    export = renderer;
}
