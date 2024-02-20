const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'TestingExtension',

            // name that will be displayed in the Scratch UI
            name: 'Testing',

            // colours to use for your extension blocks
            color1: '#800000',
            color2: '#fff700',

            // your Scratch blocks
            blocks: [
              {
                // function where your code logic lives
                opcode: 'assert',
        
                // type of block
                blockType: BlockType.BOOLEAN,
        
                // label to display on the block
                text: 'assert [assert]',
        
                // arguments used in the block
                arguments: {
                  assert:{
                    type: ArgumentType.BOOLEAN,
                    defaultValue: false
                  }
                }
              },
              {
                // function where your code logic lives
                opcode: 'inspect',
            
                // type of block
                blockType: BlockType.REPORTER,
        
                // label to display on the block
                text: 'inspect [inspect]',
        
                // arguments used in the block
                arguments: {
                    inspect:{
                        type: ArgumentType.NUMBER,
                        defaultValue: 0
                    }
                }
              }
				
            ]
        };
    }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
     assert ({assert}) {
      
      return (assert);
  }

  inspect ({inspect}) {
      
    return (inspect);
}
}

module.exports = Scratch3YourExtension;
