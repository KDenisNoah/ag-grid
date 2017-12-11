// Type definitions for ag-grid v15.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IComponent } from "../../interfaces/iComponent";
import { ComponentType } from "./componentResolver";
export declare enum RegisteredComponentSource {
    DEFAULT = 0,
    REGISTERED = 1,
}
/**
 * B the business interface (ie IHeader)
 * A the agGridComponent interface (ie IHeaderComp). The final object acceptable by ag-grid
 */
export interface RegisteredComponent<A extends IComponent<any> & B, B> {
    component: RegisteredComponentInput<A, B>;
    type: ComponentType;
    source: RegisteredComponentSource;
}
export declare type RegisteredComponentInput<A extends IComponent<any> & B, B> = AgGridRegisteredComponentInput<A> | {
    new (): B;
};
export declare type AgGridRegisteredComponentInput<A extends IComponent<any>> = AgGridComponentFunctionInput | {
    new (): A;
};
export declare type AgGridComponentFunctionInput = (params: any) => string | HTMLElement;
export interface AgGridProvidedComponentDef {
    overridable: boolean;
    defaultImpl: AgGridRegisteredComponentInput<any>;
}
export declare class ComponentProvider {
    private gridOptions;
    private context;
    private agGridDefaults;
    private agDeprecatedNames;
    private jsComponents;
    private frameworkComponents;
    postConstruct(): void;
    private init();
    registerComponent<A extends IComponent<any>>(rawName: string, component: AgGridRegisteredComponentInput<A>): void;
    /**
     * B the business interface (ie IHeader)
     * A the agGridComponent interface (ie IHeaderComp). The final object acceptable by ag-grid
     */
    registerFwComponent<A extends IComponent<any> & B, B>(rawName: string, component: {
        new (): IComponent<B>;
    }): void;
    /**
     * B the business interface (ie IHeader)
     * A the agGridComponent interface (ie IHeaderComp). The final object acceptable by ag-grid
     */
    retrieve<A extends IComponent<any> & B, B>(rawName: string): RegisteredComponent<A, B>;
    private assertCanBeOverride<A, B>(name, toAssert);
    private translateIfDeprecated(raw);
}