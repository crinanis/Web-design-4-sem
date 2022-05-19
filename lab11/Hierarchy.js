import React from "react";
import { Component } from "react";

export default class Hierarchy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tree: props.tree
        };

        this.takenIds = [];

        this.addId = this.addId.bind(this);
    }

    addId(id) {
        let taken = false;
        for (let i = 0; i < this.takenIds.length; i++) {
            if (this.takenIds[i] === id) {
                taken = true;
                break;
            }
        }
        if (taken) {
            return false;
        } else {
            this.takenIds.push(id);
            return true;
        }
    }

    render() {
        return (
            <div>{this.props.tree.map((value) => {
                return <HierarchyErrorBoundary key = {this.props.id} >
                        <HierarchyNode {...value} root={this}/>
                    </HierarchyErrorBoundary>;
            })}</div>
        );
    }
}

class HierarchyNode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };

        this.added = false;

        this.validate = this.validate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.validate();
    }

    validate() {
        if (!this.props.id) throw new Error("ID should exist!");
        if (typeof (this.props.id) === "string") throw new Error("ID should be a number, not a string!");
        if (this.props.onClick) {
            if (typeof this.props.onClick !== "function") {
                throw new Error("your onClick is not a function");
            }
        }
        let result = this.props.root.addId(this.props.id);
        if (!this.added && !result) {
            throw new Error("This ID " + this.props.id + ", " + (typeof this.props.id) + " is not unique");
        }
        this.added = true;
    }

    handleClick() {
        if (this.props.children) {
            this.setState({
                expanded: !this.state.expanded
            });
        }
        if (this.props.onClick) this.props.onClick(this.props.id);
        if (this.props.onClick) this.props.onClick(this.props.icon);
    }

    render() {
        return (
            <div className="node">
                <div className="node-head" onClick={this.handleClick}>
                    <img alt="icon" className={'arrow' + (this.state.expanded ? ' rotated' : '') + (this.props.children ? '' : ' hidden')} src="/icons/right-arrow.png"/>
                    <img alt="icon" className="icon" src = {this.state.expanded? "/icons/open-folder.png" : this.props.icon}/>
                    {this.props.name}
                </div>

                <div className="children-container" style={{display: this.state.expanded ? 'block' : 'none'}}>{((function() {
                    if (this.props.children) {
                        return this.props.children.map((value) => {
                            return <HierarchyErrorBoundary key = {this.props.id}>
                                    <HierarchyNode {...value} root={this.props.root}/>
                                </HierarchyErrorBoundary>;
                        });
                    }
                    return null;
                }).bind(this))()}</div>
            </div>
        );
    }
}

class HierarchyErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? <div key = {this.props.id} >Error</div> : <div key = {this.props.id} >{this.props.children}</div>;
    }
}