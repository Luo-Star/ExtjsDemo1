Ext.onReady(function () {
		//第二个根节点 
         var root = new Ext.tree.TreeNode({
             id: "root",
            text: "树的根"
         });
        root.appendChild(new Ext.tree.TreeNode({
           id: "c1",
           text: "子节点1"
        }));
        root.appendChild(new Ext.tree.TreeNode({
            id: "c2",
            text: "子节点1"
         }));
 
       //第二个根节点 
        var root2 = new Ext.tree.TreeNode({
            id: "root2",
           text: "树的根2"
        });
       root2.appendChild(new Ext.tree.TreeNode({
          id: "c1",
          text: "子节点2"
       }));
       root2.appendChild(new Ext.tree.TreeNode({
           id: "c2",
           text: "子节点2"
        }));

       var tree2=new Ext.tree.TreePanel({
    	   renderTo: "tree2",
           root: root2,
           width: 150
       });
        var tree = new Ext.tree.TreePanel({
            renderTo: "tree",
            root: root,
            width: 150
        });
    });