import * as ts from 'typescript';

export default class Builder {
    test(){
        let program = ts.createProgram(['Test1.ts'], {
            target: ts.ScriptTarget.ES5, 
            module: ts.ModuleKind.CommonJS
        });

        console.log(program.getCurrentDirectory());
        
        if(program) {
            program.getSourceFiles().forEach(source => {

                console.log(source.moduleName)
                //console.log(source.getFullText())
                if(program.isSourceFileFromExternalLibrary(source) === false) {
                    if(program.isSourceFileDefaultLibrary(source) === false) {
                        //console.log(source.getFullText())
                    }
                    //console.log(program.getTypeChecker().getSymbolAtLocation(source));
                }
            })
        }
    }
}