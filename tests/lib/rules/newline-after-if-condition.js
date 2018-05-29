/**
 * @fileoverview Disallow single line if
 * @author Marcos Casagrande
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/newline-after-if-condition"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("newline-after-if-condition", rule, {

    valid: [
        {
            code: "if(foo)\nconsole.log('foo');"
        },
        {
            code: "if(foo)\nconsole.log('foo');"
        },
        {
            code: "if(foo){\n\nconsole.log('foo');}"
        },
        {
            code: "if(foo){\n/* do something */}"
        }

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "if(foo){/*do something*/}",
            errors: [{
                message: "Expected one newline after if condition, found: 0",
                type: "IfStatement"
            }]
        },
        {
            code: "if(foo) console.log('foo');",
            errors: [{
                message: "Expected one newline after if condition, found: 0",
                type: "IfStatement"
            }]
        },
        {
            code: "if(foo)console.log('foo');",
            errors: [{
                message: "Expected one newline after if condition, found: 0",
                type: "IfStatement"
            }]
        },
        {
            code: "if(foo)\tconsole.log('foo');",
            errors: [{
                message: "Expected one newline after if condition, found: 0",
                type: "IfStatement"
            }]
        },
        {
            code: "if(foo){console.log('foo');}",
            errors: [{
                message: "Expected one newline after if condition, found: 0",
                type: "IfStatement"
            }]
        },
        {
            code: "if(foo)\n{console.log('foo');}",
            errors: [{
                message: "Expected one newline after if condition, found: 0",
                type: "IfStatement"
            }]
        },
        {
            code: "if(foo)\n\nconsole.log('foo');",
            errors: [{
                message: "Expected one newline after if condition, found: 2",
                type: "IfStatement"
            }]
        }
    ]
});
